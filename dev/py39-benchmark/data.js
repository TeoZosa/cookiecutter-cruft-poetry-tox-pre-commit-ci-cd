window.BENCHMARK_DATA = {
  "lastUpdate": 1628533269791,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "6fcea7e1f38d49f329f51be06454eaf52fee6b9f",
          "message": ":pushpin: Pin `actions/checkout` version in `auto-merge` job\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-09T18:15:03Z",
          "tree_id": "a6fc881605f880338e7edc0130fc0fb537099906"
        },
        "date": 1628533268020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14308.94621294293,
            "unit": "iter/sec",
            "range": "stddev: 0.00007877179262062473",
            "extra": "mean: 69.88634838080989 usec\nrounds: 7133"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4007182.25176215,
            "unit": "iter/sec",
            "range": "stddev: 7.68189597322242e-7",
            "extra": "mean: 249.5519138318083 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11350.910737153963,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397208027301614",
            "extra": "mean: 88.09865773384912 usec\nrounds: 8993"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 111157.45107692252,
            "unit": "iter/sec",
            "range": "stddev: 0.00003260285444516688",
            "extra": "mean: 8.996248027565745 usec\nrounds: 38911"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13867.643866920496,
            "unit": "iter/sec",
            "range": "stddev: 0.00008778847623598535",
            "extra": "mean: 72.11030291781383 usec\nrounds: 12954"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3875176.967576535,
            "unit": "iter/sec",
            "range": "stddev: 2.7910362663003166e-7",
            "extra": "mean: 258.0527311054366 nsec\nrounds: 3927"
          }
        ]
      }
    ]
  }
}