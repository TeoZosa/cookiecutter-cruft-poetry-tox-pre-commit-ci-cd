window.BENCHMARK_DATA = {
  "lastUpdate": 1623175799224,
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
          "id": "25194b03a2861eed6046db75a4ef1a7ecab259ce",
          "message": ":bulb: Backtick-quote sphinx extensions in comments",
          "timestamp": "2021-06-08T18:04:37Z",
          "tree_id": "c5967c2ff04c368d0e11a052b8e9fe9f14d49c59"
        },
        "date": 1623175798173,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15691.872256790093,
            "unit": "iter/sec",
            "range": "stddev: 0.00001650145463277456",
            "extra": "mean: 63.72725852183038 usec\nrounds: 11001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4151418.1839575237,
            "unit": "iter/sec",
            "range": "stddev: 1.455276440105348e-7",
            "extra": "mean: 240.88153871478605 nsec\nrounds: 70423"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12559.42066074342,
            "unit": "iter/sec",
            "range": "stddev: 0.00001599099573241665",
            "extra": "mean: 79.62150699559479 usec\nrounds: 7576"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 128093.40215595419,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067321697141651695",
            "extra": "mean: 7.806803341693558 usec\nrounds: 42195"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14828.593318657848,
            "unit": "iter/sec",
            "range": "stddev: 0.00010744385110771022",
            "extra": "mean: 67.43728002451624 usec\nrounds: 13281"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4159098.2796684327,
            "unit": "iter/sec",
            "range": "stddev: 1.6243137906006624e-7",
            "extra": "mean: 240.43673237741353 nsec\nrounds: 166667"
          }
        ]
      }
    ]
  }
}