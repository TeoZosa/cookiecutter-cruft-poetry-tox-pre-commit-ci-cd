window.BENCHMARK_DATA = {
  "lastUpdate": 1629248957303,
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
          "id": "f612eea053f5cf53375c71baf75dadd388a9e341",
          "message": ":wrench: Conditionally render Jupyter-specific dependency\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-18T01:03:50Z",
          "tree_id": "d66945fab5f475d849f1e0b90f814f81ba14c322"
        },
        "date": 1629248955068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14875.80388550215,
            "unit": "iter/sec",
            "range": "stddev: 0.00003205272935413053",
            "extra": "mean: 67.22325782841173 usec\nrounds: 6419"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4995635.526105686,
            "unit": "iter/sec",
            "range": "stddev: 4.5322786192231606e-8",
            "extra": "mean: 200.17473147776087 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13740.80957987575,
            "unit": "iter/sec",
            "range": "stddev: 0.000012580493481722121",
            "extra": "mean: 72.7759157265785 usec\nrounds: 9042"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 155263.48673103252,
            "unit": "iter/sec",
            "range": "stddev: 4.713305718369264e-7",
            "extra": "mean: 6.440664325233976 usec\nrounds: 35588"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14916.936202110186,
            "unit": "iter/sec",
            "range": "stddev: 0.00001340954034241986",
            "extra": "mean: 67.0378948096954 usec\nrounds: 13718"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4887586.431466013,
            "unit": "iter/sec",
            "range": "stddev: 1.8328018283175134e-8",
            "extra": "mean: 204.5999623782737 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}