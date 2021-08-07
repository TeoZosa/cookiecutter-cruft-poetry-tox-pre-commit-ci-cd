window.BENCHMARK_DATA = {
  "lastUpdate": 1628299380234,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "3234dacc23fc8692fa7d4bab6605e6fd335248bd",
          "message": "Merge pull request #271 from TeoZosa/refactor-ci-and-release-workflows\n\n👷‍♂️Refactor CI and Release Workflows to Improve Robustness and Efficiency",
          "timestamp": "2021-08-07T01:17:16Z",
          "tree_id": "34b40d0da8330138c005519587a402d65b873e8c"
        },
        "date": 1628299378056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15652.874471053734,
            "unit": "iter/sec",
            "range": "stddev: 0.00003200953664647478",
            "extra": "mean: 63.8860294861025 usec\nrounds: 11429"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4099859.276365819,
            "unit": "iter/sec",
            "range": "stddev: 3.016295486785272e-7",
            "extra": "mean: 243.91081073597078 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13855.19871483755,
            "unit": "iter/sec",
            "range": "stddev: 0.00001144779650380386",
            "extra": "mean: 72.17507453928457 usec\nrounds: 7003"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132266.83382229457,
            "unit": "iter/sec",
            "range": "stddev: 7.058596149580207e-7",
            "extra": "mean: 7.560474316210951 usec\nrounds: 40161"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15405.686181317638,
            "unit": "iter/sec",
            "range": "stddev: 0.00006384533362670762",
            "extra": "mean: 64.91109764475746 usec\nrounds: 8961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4137172.4560398064,
            "unit": "iter/sec",
            "range": "stddev: 3.569862294885164e-7",
            "extra": "mean: 241.71097787868663 nsec\nrounds: 185186"
          }
        ]
      }
    ]
  }
}