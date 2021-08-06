window.BENCHMARK_DATA = {
  "lastUpdate": 1628294394365,
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
          "id": "ec3211f8c1a9b044b05f9e9bbde25ea625381c23",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-08-06T23:21:52Z",
          "tree_id": "e3dfbac8bcb022736cac6a721697d0eb3bc9befa"
        },
        "date": 1628294392833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13854.566071076893,
            "unit": "iter/sec",
            "range": "stddev: 0.000009358482427585292",
            "extra": "mean: 72.17837028383175 usec\nrounds: 8985"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5207235.30131837,
            "unit": "iter/sec",
            "range": "stddev: 4.09413403291918e-9",
            "extra": "mean: 192.0404863876022 nsec\nrounds: 50762"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12476.101903018787,
            "unit": "iter/sec",
            "range": "stddev: 0.00001642766681508162",
            "extra": "mean: 80.1532407937478 usec\nrounds: 9776"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 154915.5849466623,
            "unit": "iter/sec",
            "range": "stddev: 2.715096677208523e-7",
            "extra": "mean: 6.455128451693881 usec\nrounds: 49505"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13666.897720791685,
            "unit": "iter/sec",
            "range": "stddev: 0.00000852245235682972",
            "extra": "mean: 73.16949467461683 usec\nrounds: 10516"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4923537.779875175,
            "unit": "iter/sec",
            "range": "stddev: 2.3445902331084e-8",
            "extra": "mean: 203.10598693632863 nsec\nrounds: 172414"
          }
        ]
      }
    ]
  }
}