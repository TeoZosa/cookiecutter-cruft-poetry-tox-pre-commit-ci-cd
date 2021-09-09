window.BENCHMARK_DATA = {
  "lastUpdate": 1631225850210,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "9a2f7db7c5a78b22b5021d6e11877af2b839c45f",
          "message": ":bug: :hammer: Correctly include C extensions in packages\n\nA `setup.py` file is needed for `poetry build` to include compiled\nlibaries in the final wheel.",
          "timestamp": "2021-09-09T22:08:34Z",
          "tree_id": "d9704130dc693054cf5c89f5eb76ae4157e91e41"
        },
        "date": 1631225847780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15173.577778608014,
            "unit": "iter/sec",
            "range": "stddev: 0.00007147578025115431",
            "extra": "mean: 65.90403493431971 usec\nrounds: 11765"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3962329.775523433,
            "unit": "iter/sec",
            "range": "stddev: 4.2890618832757923e-7",
            "extra": "mean: 252.37677241740383 nsec\nrounds: 74075"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12619.088921649342,
            "unit": "iter/sec",
            "range": "stddev: 0.0001301516785973957",
            "extra": "mean: 79.24502364702394 usec\nrounds: 9515"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130040.0521187057,
            "unit": "iter/sec",
            "range": "stddev: 5.407189906086398e-7",
            "extra": "mean: 7.689938474395261 usec\nrounds: 35335"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15498.836235293953,
            "unit": "iter/sec",
            "range": "stddev: 0.00004241013490631272",
            "extra": "mean: 64.52097336978113 usec\nrounds: 9125"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4098640.9230012977,
            "unit": "iter/sec",
            "range": "stddev: 2.4045892973888775e-7",
            "extra": "mean: 243.98331514904223 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}